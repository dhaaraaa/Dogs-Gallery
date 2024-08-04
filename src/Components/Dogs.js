import Dog1 from "../images/pic1.jpeg"
import Dog2 from "../images/pic2.jpeg"
import Dog3 from "../images/pic3.jpeg"
import Dog4 from "../images/pic4.jpeg"
import Dog5 from "../images/pic5.jpeg"
import Dog6 from "../images/pic6.jpeg"

function Dogii() {
    return (
        <>
            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", padding: "10px" }}>Doggies</h1>
            <div className="container">
                {
                    arr.map(function (item) {
                        return <div className="container1">
                            <div className="cont">
                                <img src={item.dog} alt={item.name}></img>
                                <h4>{item.name}</h4>
                            </div>
                        </div>
                    })
                }

            </div>
        </>
    )
}

var arr = [{
    dog: Dog1,
    name: "Whitesmoky with flowers"
},
{
    dog: Dog2,
    name: "Puppy"
},
{
    dog: Dog3,
    name: "Julies Doggie"
},
{
    dog: Dog4,
    name: "Charliee"
},
{
    dog: Dog5,
    name: "Bobbies"
},
{
    dog: Dog6,
    name: "Ziva"
}
]

export default Dogii;