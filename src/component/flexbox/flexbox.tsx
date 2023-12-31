
import './css/flexbox.css'
export const Flexbox = () => {

    return (
        <>
            <div className="wrapper">
                <h2>
                    Align items
                </h2>
                <div className="alignItems">
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                </div>
            </div>
            <div className="wrapper">
                <h2>
                    Justify Content
                </h2>
                <div className="spaceBetween">
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <ul>
                        <li>
                            <a href='#'>Cusos</a>
                        </li>
                        <li>
                            <a href='#' >Proyectos</a>
                        </li>
                        <li>
                            <a href='#'>Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
            <section className="wrapper">
                <h2>
                    Justify Content
                </h2>
                <div className="justifyContent">
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />

                </div>
            </section>

            <section className="wrapper">
                <h2>
                    Flex
                </h2>
                <div className="flex">
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <div>
                        <button>hola</button>
                    </div>
                </div>
            </section>
            <section className="wrapper">
                <h1>  Flex Wrap </h1>
                <div className="flexWrap">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <div className="box"></div>
                </div>
            </section>

            <section className="wrapper">
                <h2> Flex Drirection </h2>
                <h2> small chat</h2>
                <div className="flexDirection">
                    <div className="box">1 message</div>
                    <div className="box">2 message</div>
                    <div className="box">3 message</div>
                    <div className="box">4 message</div>
                    <div className="box">5 message</div>
                    <div className="box">6 message</div>
                    <div className="box">7 message</div>
                </div>
                <form action="">
                    <input type="text" placeholder="type for message " />
                    <button>senad</button>
                </form>

            </section>
            <section className="wrapper" >
                <h2>Flex Order</h2>
                <div className="flexOrder" >
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto assumenda perspiciatis nostrum, labore pariatur eligendi ea accusamus ratione repellat doloribus, excepturi porro quos maiores ipsum praesentium officiis aliquid, modi sit.</p>
                </div>
                <div className="flexOrder" >
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto assumenda perspiciatis nostrum, labore pariatur eligendi ea accusamus ratione repellat doloribus, excepturi porro quos maiores ipsum praesentium officiis aliquid, modi sit.</p>
                </div>
                <div className="flexOrder" >
                    <img src={'/public/grand-escape.jpg'} alt="grand-escape" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto assumenda perspiciatis nostrum, labore pariatur eligendi ea accusamus ratione repellat doloribus, excepturi porro quos maiores ipsum praesentium officiis aliquid, modi sit.</p>
                </div>

            </section>

            <section className="wrapper" >
                <h2> Default Flex </h2>
                <section className="displayFlex">

                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </section>
            </section>
        </>
    )

}