import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import blog2 from './images/blog2.jfif';
const Post = () => {
  return (
    <div>
        <Navbar/>

        <section id="blog-container">
        <div class="blogs blogpost">
            <div class="post">
                <img src={blog2}/>
                <h3>Learn Data Structures Algorithms in Easiest Ways</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eos error ratione eius voluptas cumque! Optio nihil ipsam amet sed dolorum nostrum eius nesciunt maiores! Doloribus deserunt dolorum quis cumque laboriosam quisquam, ipsa necessitatibus eius placeat a animi quod debitis facilis, delectus nostrum nobis ipsum autem nemo, enim tempore in!
                <br/><br/>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe sint iure itaque neque quae commodi reprehenderit voluptates repudiandae autem distinctio quidem voluptatum architecto aliquid, quam labore. Dolore enim repellat esse accusantium, atque excepturi, saepe ad, ex tempore rem odio velit. Consectetur pariatur adipisci provident accusamus voluptatum, facilis maiores laudantium aliquid quam, quae assumenda architecto? Reprehenderit fugiat placeat quos nobis, praesentium recusandae unde sapiente dignissimos dolores magni, quia similique vitae doloremque aspernatur nam laborum blanditiis. Totam impedit inventore corrupti dolorum in voluptatibus, earum ab, quidem voluptatem exercitationem sit magni, magnam laudantium adipisci fugiat fugit culpa possimus quos ipsa facilis accusamus ullam?
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nobis beatae mollitia facilis molestiae suscipit illum ea odio neque earum, dolorum dignissimos temporibus aliquam omnis distinctio deserunt alias. Perferendis sint blanditiis modi, suscipit autem fuga adipisci placeat eos, recusandae debitis expedita culpa aperiam voluptatem. Beatae tempore perspiciatis magni, praesentium corrupti in totam? Dolorum voluptatem autem dolor expedita nostrum, ea adipisci, asperiores cupiditate illum mollitia velit reprehenderit unde delectus ad amet corrupti, eos sit accusamus! Adipisci tenetur placeat quisquam doloremque nisi quaerat sit cumque facilis officia hic animi voluptatem voluptas similique vel distinctio necessitatibus, nulla quibusdam officiis illum omnis quas ipsam quam voluptatum nam. Delectus aut corporis blanditiis fugiat facilis in maiores totam iusto. Laudantium aspernatur hic assumenda? Nihil deserunt praesentium deleniti recusandae magnam minima eum quae modi voluptate aliquam iste cum beatae eligendi officiis placeat molestias a rerum in, soluta reprehenderit sequi sint! Dignissimos nam, animi quia voluptate optio excepturi blanditiis qui iusto quis sapiente recusandae. Magnam ipsa, dicta porro itaque cum dolor ullam excepturi nam accusamus, dolorum natus ipsam expedita deleniti eos hic sint doloremque repudiandae? Sequi quo quisquam, magnam voluptatibus facere quos iste dolorum, nostrum vero at fuga. Cupiditate itaque, obcaecati porro ipsum impedit natus error beatae quos!
            
            </p>
            <a href="#">Read Next ?</a>
            </div>
        </div>
    </section>

        <Footer/>
      
    </div>
  )
}

export default Post;
