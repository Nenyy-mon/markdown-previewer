function Preview({ReactMarkdown ,markdown}) {
    return (
        <div  
        id="preview"
       >

<ReactMarkdown>{markdown}</ReactMarkdown>    
    </div>
    )
}

export default Preview

