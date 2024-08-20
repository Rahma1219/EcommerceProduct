import { useState, useEffect } from 'react'
import './Imageitem.css'
import Next from '/images/icon-next.svg'
import Previous from '/images/icon-previous.svg'
import exit from '/images/icon-close.svg'









function Imageitem() {

    const [ArrayOfObject, setArrayOfObject] = useState([
        {
            id: 1,
            Image: "/images/image-product-1.jpg",
            thumbnail: "/images/image-product-1-thumbnail.jpg"

        },
        {
            id: 2,
            Image: "/images/image-product-2.jpg",
            thumbnail: "/images/image-product-2-thumbnail.jpg"
        },
        {
            id: 3,
            Image: "/images/image-product-3.jpg",
            thumbnail: "/images/image-product-3-thumbnail.jpg"
        },
        {
            id: 4,
            Image: "/images/image-product-4.jpg",
            thumbnail: "/images/image-product-4-thumbnail.jpg"
        }
    ])


    const [showdiv, setShowdiv] = useState(false)
    const [value, setValue] = useState(0)
    const [slide, setSlide] = useState(1)

    // const {Image} = ArrayOfObject[value]
    const { Image } = ArrayOfObject[value]

    function nextSlide() {
        if (slide !== ArrayOfObject.length) {
            setSlide(slide + 1)
        } else if (slide === ArrayOfObject.length) {
            setSlide(1)
        }
    }

    function previousSlide() {
        if (slide !== 1) {
            setSlide(slide - 1)
        } else if (slide === 1) {
            setSlide(ArrayOfObject.length)
        }

    }




    function Background({ ArrayOfObject, slide, nextSlide, previousSlide }) {




        return (

            <div className='bg' >
                <div className='eee'>


                    {ArrayOfObject.map((item, index) => (

                        <div key={index} className={slide === index + 1 ? "boximage" : "box"} >

                            <img src={exit} id='close' onClick={() => setShowdiv(false)} ></img>
                            <img src={item.Image} className='arrowimage' ></img>
                           

                            <ul className='arrow'>
                                <li><button onClick={nextSlide} className='nextbtn'><img src={Next} alt="" /></button></li>
                                <li><button onClick={previousSlide} className='prebtn'><img src={Previous} alt="" /></button></li>
                            </ul>
                            

                        </div>
                    ))}
                </div>
            </div>

        )


    }




    return (
        <>

            {showdiv == true ?
                (<Background
                    ArrayOfObject={ArrayOfObject}
                    slide={slide}
                    nextSlide={nextSlide}
                    previousSlide={previousSlide}
                    setShowdiv={setShowdiv} />
                ) : null}










            <article>
                <div id='sec3'>
                    {ArrayOfObject.map((item, index) => (
                        <div key={index} className={slide === index + 1 ? "boximage" : "box"}>
                            <img onClick={() => setShowdiv(true)} src={item.Image} className='mainimage' id='img2' ></img>
                            <ul className='arrow'>
                                <li><button onClick={nextSlide} className='nextbtn'><img src={Next} alt="" /></button></li>
                                <li><button onClick={previousSlide} className='prebtn'><img src={Previous} alt="" /></button></li>
                            </ul>

                        </div>

                    ))}
                </div>




                <>
                    <div className='mainimage' >
                        <img onClick={() => setShowdiv(true)} src={Image}></img>

                    </div>

                    <ul>

                        {ArrayOfObject.map((item, index) => {
                            return (


                                <>


                                    <div id='edit'>
                                        <li key={item.id} onClick={() => setValue(index)}>
                                            <img className='thumbnail' src={item.thumbnail}></img>
                                        </li>

                                    </div>
                                </>

                            )

                        })}
                    </ul>
                </>
            </article>




        </>)
}


export default Imageitem

