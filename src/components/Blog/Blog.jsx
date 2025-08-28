import React from 'react'
import "./Blog.css"
import CardImg from "../../assets/card.png"

const Blog = () => {
  return (
    <section className='BlogMain'>
        <div className='BContainer'>
                <div className='BContainerHeading'>
                    <span className='BContainerHeadingFirst'>Blog & News</span>
                    <span className='BContainerHeadingSecond'>Read Our Latest News</span>
                </div>
                <div className='BContainerItems'>
                    <div className='BContainerItem'>
                            <img src={CardImg} alt="" />
                            <div className='BContainerItemDate'>
                                <span>Medical</span>
                                <span>March 31, 2022</span>
                            </div>
                            <div className='BContainerItemDescription'>
                                <span className='BContainerItemTitle'>6 Tips To Protect Your Mental Health When You’re Sick</span>
                                <div className='BContainerItemDes'>
                                    <img src={CardImg} alt="" />
                                    <span className='BContainerItemAuthor'>Rebecca Lee</span>
                                </div>
                            </div>
                    </div>  
                     <div className='BContainerItem'>
                            <img src={CardImg} alt="" />
                            <div className='BContainerItemDate'>
                                <span>Medical</span>
                                <span>March 31, 2022</span>
                            </div>
                            <div className='BContainerItemDescription'>
                                <span className='BContainerItemTitle'>6 Tips To Protect Your Mental Health When You’re Sick</span>
                                <div className='BContainerItemDes'>
                                    <img src={CardImg} alt="" />
                                    <span className='BContainerItemAuthor'>Rebecca Lee</span>
                                </div>
                            </div>
                    </div>  
                     <div className='BContainerItem'>
                            <img src={CardImg} alt="" />
                            <div className='BContainerItemDate'>
                                <span>Medical</span>
                                <span>March 31, 2022</span>
                            </div>
                            <div className='BContainerItemDescription'>
                                <span className='BContainerItemTitle'>6 Tips To Protect Your Mental Health When You’re Sick</span>
                                <div className='BContainerItemDes'>
                                    <img src={CardImg} alt="" />
                                    <span className='BContainerItemAuthor'>Rebecca Lee</span>
                                </div>
                            </div>
                    </div>  
                </div>
        </div>
    </section>
  )
}

export default Blog