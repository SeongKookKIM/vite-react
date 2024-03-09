import React, { useCallback, useRef, useState } from "react";
import "./Editor.css";

interface OnCreateType {
  onCreate: (content: string) => void;
}

function Editor({ onCreate }: OnCreateType) {
  const [content, setContent] = useState<string>("");
  const contentRef = useRef<HTMLInputElement>(null);

  const onKeydown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = useCallback(() => {
    if (content === "") {
      contentRef.current?.focus();
      return;
    }

    onCreate(content);
    setContent("");
  }, [content, onCreate]);

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        type="text"
        placeholder="새로운 Todo..."
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={onKeydown}
        value={content}
      />
      <button type="button" onClick={onSubmit}>
        추가
      </button>
    </div>
  );
}

export default Editor;
