"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const FILE_LABELS: Record<string, string> = {
  "business.json": "Informații Generale",
  "services.json": "Carduri Servicii",
  "vulcanizare.json": "Vulcanizare",
  "vulcanizare-mobila.json": "Vulcanizare Mobilă",
  "anvelope.json": "Anvelope",
  "freon-ac.json": "Freon AC",
  "itp.json": "ITP",
  "reglaj-directie.json": "Reglaj Direcție",
  "service-rapid.json": "Service Rapid",
};

const FILE_ORDER = Object.keys(FILE_LABELS);

export default function AdminPage() {
  const router = useRouter();
  const [files, setFiles] = useState<string[]>([]);
  const [activeFile, setActiveFile] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [savedContent, setSavedContent] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [parseError, setParseError] = useState<string>("");

  useEffect(() => {
    fetch("/api/admin")
      .then((r) => r.json())
      .then((data: string[]) => {
        const ordered = FILE_ORDER.filter((f) => data.includes(f));
        const rest = data.filter((f) => !FILE_ORDER.includes(f)).sort();
        setFiles([...ordered, ...rest]);
        if (ordered.length > 0) setActiveFile(ordered[0]);
      });
  }, []);

  const loadFile = useCallback((file: string) => {
    setActiveFile(file);
    setStatus("idle");
    setParseError("");
    fetch(`/api/admin?file=${file}`)
      .then((r) => r.json())
      .then((data) => {
        const pretty = JSON.stringify(data, null, 2);
        setContent(pretty);
        setSavedContent(pretty);
      });
  }, []);

  useEffect(() => {
    if (activeFile) loadFile(activeFile);
  }, [activeFile, loadFile]);

  const handleChange = (val: string) => {
    setContent(val);
    setParseError("");
    try {
      JSON.parse(val);
    } catch (e: unknown) {
      setParseError((e as Error).message);
    }
  };

  const save = async () => {
    try {
      const parsed = JSON.parse(content);
      setStatus("saving");
      const res = await fetch(`/api/admin?file=${activeFile}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });
      if (!res.ok) throw new Error("Save failed");
      const pretty = JSON.stringify(parsed, null, 2);
      setSavedContent(pretty);
      setContent(pretty);
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const isDirty = content !== savedContent;
  const canSave = isDirty && !parseError;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-gray-800 flex flex-col">
        <div className="px-4 py-5 border-b border-gray-800">
          <span className="font-bold text-white text-sm tracking-wide uppercase">Admin</span>
          <p className="text-gray-500 text-xs mt-0.5">Editare date</p>
        </div>
        <nav className="flex-1 py-2 overflow-y-auto">
          {files.map((file) => (
            <button
              key={file}
              onClick={() => setActiveFile(file)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                activeFile === file
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-900"
              }`}
            >
              {FILE_LABELS[file] ?? file}
            </button>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-gray-800 flex flex-col gap-2">
          <a href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            ← Înapoi la site
          </a>
          <button
            onClick={async () => {
              await fetch("/api/admin/login", { method: "DELETE" });
              router.push("/admin/login");
            }}
            className="text-xs text-gray-600 hover:text-red-400 transition-colors text-left"
          >
            Deconectare
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950 sticky top-0 z-10">
          <div>
            <h1 className="font-semibold text-white">
              {FILE_LABELS[activeFile] ?? activeFile}
            </h1>
            <p className="text-xs text-gray-500 font-mono mt-0.5">{activeFile}</p>
          </div>
          <div className="flex items-center gap-3">
            {parseError && (
              <span className="text-xs text-red-400 max-w-xs truncate" title={parseError}>
                JSON invalid
              </span>
            )}
            {isDirty && !parseError && (
              <span className="text-xs text-yellow-400">Modificat</span>
            )}
            {status === "saved" && (
              <span className="text-xs text-green-400">Salvat!</span>
            )}
            {status === "error" && (
              <span className="text-xs text-red-400">Eroare la salvare</span>
            )}
            <button
              onClick={save}
              disabled={!canSave || status === "saving"}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                canSave && status !== "saving"
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-600 cursor-not-allowed"
              }`}
            >
              {status === "saving" ? "Se salvează…" : "Salvează"}
            </button>
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 p-6">
          <textarea
            value={content}
            onChange={(e) => handleChange(e.target.value)}
            spellCheck={false}
            className={`w-full h-full min-h-[70vh] font-mono text-sm bg-gray-900 rounded-xl p-5 resize-none outline-none border transition-colors ${
              parseError
                ? "border-red-600"
                : isDirty
                ? "border-yellow-600/50"
                : "border-gray-800"
            } text-gray-100 leading-relaxed`}
          />
          {parseError && (
            <p className="mt-2 text-xs text-red-400 font-mono">{parseError}</p>
          )}
        </div>
      </main>
    </div>
  );
}
