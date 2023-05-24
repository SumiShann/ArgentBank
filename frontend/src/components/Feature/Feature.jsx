import './Feature.scss'

export default function Feature({src, alt, title, desc}){
    return (
        <div className="feature-item">
          <img src={src} alt={alt} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{desc}</p>
        </div>
    )
}