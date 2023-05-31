import "./Input.scss"

export default function Input({ label, divClass="input-wrapper", type, id, onChange, children, value}){
    switch (label){
        case "username":
            return (
                <div className={divClass}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" autoComplete="username" onChange={onChange} required/>
                </div>
            )
        case "password":
            return (
                <div className={divClass}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" autoComplete="off" onChange={onChange} required/>
                </div>
            )
        case "after":
            return (
                <div className={divClass}>
                    <input type={type} id={id} />
                    <label htmlFor={id}>{children}</label>
                </div>
            )
        default:
            return (
                <div className={divClass}>
                    <label htmlFor={id}>{children}</label>
                    <input type="text" id={id} value={value} autoComplete="off" disabled/>
                </div>
            )
    }
}