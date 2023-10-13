function Editor({markdown, setMarkdown}) {
    return (
        <textarea 
        value={markdown}
        onChange={e => {
            setMarkdown(e.target.value)  
        }} 
        id="editor">
        </textarea>
    )
}

export default Editor