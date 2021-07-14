function CommunityForm ({onSubmit, buttonText, inputs}) {
    return(
        <form onSubmit={onSubmit}>

        {
            inputs.map(props=>(
                <div>
                <input  {...props}/>
                </div>
            ))
        }
        <button type="submit">
            {buttonText}
        </button>

      </form>
    )
}
export default CommunityForm