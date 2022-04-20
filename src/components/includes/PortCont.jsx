import React from 'react'


function PortInfo({id,title,image,link,category}){
    return (
        <article className='port__item'>
            <figure className='img'>
                <a href={link}><img src={image} alt={`port0${id}`} /></a>
            </figure>
            <div className='text'>
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}

function PortCont ({port}){
    return (
        <section className='port__cont'> 
            <div className='container'>
                <div className='portfolio__inner'>
                    {port.map((data)=>(
                        <PortInfo
                            key={data.id}
                            title={data.title}
                            category={data.category}
                            image={data.image}
                            link={data.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortCont;