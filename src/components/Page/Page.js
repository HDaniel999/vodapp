import React, { Component } from 'react'
import PageLayout from './PageLayout'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
class Page extends Component {
    setTitle (title) {
        document.title = title
    }

    componentDidUpdate (prevProps) {
        if (this.props.title !== prevProps.title) {
            this.setTitle(this.props.title)
        }
    }
   
    render() {
       return (
           <PageLayout>
               <Nav></Nav>
               {this.props.children}
               <Footer></Footer>
           </PageLayout>
       )
   }
}
export default Page