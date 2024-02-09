import './index.css'

const Header=()=>{
return(
    <div className="container">
        <h1 className="proTitle">Welcome To React</h1>
        <p className="desc">This is a react render tabitem project using classs components</p>
        <ul className="uLists">
            <li className="img1">
                <img src="https://i.pinimg.com/originals/8f/8f/b4/8f8fb43ce828a22c91c0b59f55fb91b3.png"
                alt="instagram" />

            </li>
            <li className="img2">
<img src="https://png.pngtree.com/element_our/sm/20180524/sm_5b072d2f4f66c.jpg"
alt="linkedin"/>
            </li>
            <li className="img3">
                <img src="https://e7.pngegg.com/pngimages/698/768/png-clipart-computer-icons-github-symbol-github-white-face.png"
alt="github"/>
            </li>

        </ul>
    </div>
)

}

export default Header