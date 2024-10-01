import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import {Fade} from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import pp from "../../images/portfolio.png";
import {FaCode} from "react-icons/fa";
import {Link} from "react-router-dom";
import {HiArrowRight} from "react-icons/hi";

export default function Projects() {
    return (
        <div>
            <Container fluid="fluid" className="certificate-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="certificate-description d-flex justify-content-start">
                            <Zoom left="left" cascade="cascade">
                                <h1 className="aboutme-heading">Projects</h1>
                            </Zoom>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4" >
                            <Fade bottom="bottom">
                                <div
                                    key={1}
                                    className="singleProject"
                                    style={{
                                        backgroundColor: "rgb(142 70 186 / 31%)",
                                        border: "1px solid"
                                    }}>
                                    <div className="projectContent">
                                        <h5
                                            id={"first"}
                                            style={{
                                                color: "#fbd9ad"
                                            }}>
                                            Backend Diffa-app
                                        </h5>
                                        <img src={nyc} alt={nyc}/>
                                        <div className="project--showcaseBtn">
                                            <a
                                                href={"https://github.com/DifaApp/CC-Difa-App"
}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={"iconBtn"}
                                                aria-labelledby={`code`}>
                                                <FaCode id={`code`} className={"icon"} aria-label="Code"/>
                                            </a>
                                        </div>
                                    </div>
                                    <h6>
                                        <p
                                            className="project--desc"
                                            style={{
                                                background: "#fbd9ad",
                                                color: "#b061df",
                                                fontWeight: 600
                                            }}>
                                            The Backend Diffa-app project is designed to manage seamless communication and
                                            data processing for the Diffa platform. It integrates core features such as
                                            authentication, real-time updates, and database management, ensuring high
                                            performance and reliability. Built with scalability in mind, this backend is
                                            ready to support future expansions and feature enhancements as the platform
                                            evolves.
                                        </p>
                                    </h6>
                                    <div
                                        className="project--lang"
                                        style={{
                                            background: "#fbd9ad",
                                            color: "#b061df",
                                            fontWeight: 600
                                        }}>
                                        JavaScript, Node js
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                            <Fade bottom="bottom">
                                <div
                                    key={1}
                                    className="singleProject"
                                    style={{
                                        backgroundColor: "rgb(142 70 186 / 31%)",
                                        border: "1px solid"
                                    }}>
                                    <div className="projectContent">
                                        <h5
                                            id={"first"}
                                            style={{
                                                color: "#fbd9ad"
                                            }}>
                                            Analisis Amazon Menggunakan Kmeans-Clustering
                                        </h5>
                                        <img src={hd} alt={hd}/>
                                        <div className="project--showcaseBtn">
                                            <a
                                                href={"hhttps://github.com/nabilhatami86/analisis_amazon_kmeansCluster"
}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={"iconBtn"}
                                                aria-labelledby={`code`}>
                                                <FaCode id={`code`} className={"icon"} aria-label="Code"/>
                                            </a>
                                        </div>
                                    </div>
                                    <h6>
                                        <p
                                            className="project--desc"
                                            style={{
                                                background: "#fbd9ad",
                                                color: "#b061df",
                                                fontWeight: 600
                                            }}>
                                            Proyek ini menganalisis data produk Amazon menggunakan algoritma
                                            KMeans-Clustering. Dengan memanfaatkan teknik pembelajaran mesin, proyek ini
                                            bertujuan untuk mengelompokkan data produk berdasarkan karakteristiknya, seperti
                                            harga, ulasan, dan popularitas. Hasil analisis ini dapat digunakan untuk
                                            mendapatkan wawasan yang lebih dalam tentang pola produk dan preferensi
                                            pelanggan, serta membantu pengambilan keputusan strategis bagi penjual di
                                            Amazon.
                                        </p>
                                    </h6>
                                    <div
                                        className="project--lang"
                                        style={{
                                            background: "#fbd9ad",
                                            color: "#b061df",
                                            fontWeight: 600
                                        }}>
                                        Pandas, Matplotlib, Scikit-Learn, seaborn, plotly , numpy
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                            <Fade bottom="bottom">
                                <div
                                    key={1}
                                    className="singleProjectPage"
                                    style={{
                                        backgroundColor: "rgb(142 70 186 / 31%)",
                                        border: "1px solid"
                                    }}>
                                    <div className="projectPageContent">
                                        <h5
                                            id={"first"}
                                            style={{
                                                color: "#fbd9ad"
                                            }}>
                                            Website SNKI
                                        </h5>
                                        <img src={ci} alt={ci}/>
                                        <div className="project--showcaseBtn">
                                            <a
                                                href={"https://github.com/nabilhatami86/Frontend-UploudDocument"
}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={"iconBtn"}
                                                aria-labelledby={`code`}>
                                                <FaCode id={`code`} className={"icon"} aria-label="Code"/>
                                            </a>
                                        </div>
                                    </div>
                                    <h6>
                                        <p
                                            className="project--desc"
                                            style={{
                                                background: "#fbd9ad",
                                                color: "#b061df",
                                                fontWeight: 600
                                            }}>
                                            platform untuk mengelola dan mengunggah dokumen secara efisien. Pengguna dapat
                                            dengan mudah mengunggah, menyimpan, dan mengakses dokumen penting yang
                                            terorganisir dengan baik. Sistem ini dilengkapi dengan antarmuka yang
                                            user-friendly untuk mendukung pengalaman pengguna yang lebih baik.
                                        </p>
                                    </h6>
                                    <div
                                        className="project--lang"
                                        style={{
                                            background: "#fbd9ad",
                                            color: "#b061df",
                                            fontWeight: 600
                                        }}>
                                        React js , Node js, JavaScript
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4" style={{ margin: "9px 9px " }}>
                            <Fade bottom="bottom">
                                <div
                                    key={1}
                                    className="singleProject"
                                    style={{
                                        backgroundColor: "rgb(142 70 186 / 31%)",
                                        border: "1px solid"
                                    }}>
                                    <div className="projectContent">
                                        <h5
                                            id={"first"}
                                            style={{
                                                color: "#fbd9ad"
                                            }}>
                                            Personal Portfolio
                                        </h5>
                                        <img src={pp} alt={pp}/>
                                        <div className="project--showcaseBtn">
                                            <a
                                                href={"https://github.com/nabilhatami86/potofolio"
}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={"iconBtn"}
                                                aria-labelledby={`code`}>
                                                <FaCode id={`code`} className={"icon"} aria-label="Code"/>
                                            </a>
                                        </div>
                                    </div>
                                    <h6>
                                        <p
                                            className="project--desc"
                                            style={{
                                                background: "#fbd9ad",
                                                color: "#b061df",
                                                fontWeight: 600
                                            }}>
                                            Welcome to my personal portfolio. Explore my work, skills, and achievements in a
                                            concise and visually appealing format. Get a glimpse of my expertise and
                                            creativity.
                                        </p>
                                    </h6>
                                    <div
                                        className="project--lang"
                                        style={{
                                            background: "#fbd9ad",
                                            color: "#b061df",
                                            fontWeight: 600
                                        }}>
                                        React, JavaScript, Node js
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <div className="blog--viewAll">
                        <Link to="/projectspage">
                            <button className="btn btn-primary">
                                View All
                                <HiArrowRight className="viewArr"/>
                            </button>
                        </Link>
                    </div>
                </Container>
            </Container>
        </div>
    );
}
