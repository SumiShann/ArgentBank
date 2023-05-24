import "./Input.scss"

export default function Input({ label, divClass, type, id, children}){
    switch (label){
        case "before":
            return (
                <div className={divClass}>
                    <label htmlFor={id}>{children}</label>
                    <input type={type} id={id} />
                </div>
            )
        case "after":
            return (
                <div className={divClass}>
                    <input type={type} id={id} /><label htmlFor={id}>{children}</label>
                </div>
            )
        case "username":
            return (
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
            )
    }
}