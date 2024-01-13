export default function body(props){
    return (
            <div>
            {
            props.lake.map(image=>{
                return(
                <div key={image.id} className="column">
                    <img src={image.img} alt=""></img>
                </div>
                )
            })
            }
            </div>
    )
}