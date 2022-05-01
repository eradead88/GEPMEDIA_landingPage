import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import styles from './youtubevids.module.css';

function timeout(delay:number) {
    return new Promise(res => setTimeout(res, delay));
}

export function Video(){
    return (
        <Container className='p-3'>
            <div className='alert alert-info' role='alert'>
                <h4 className='alert-heading'></h4>
                <iframe className={styles.frame}
                title={"YouTube video player"}
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "40px",
                    display: "block",
                }}
                        src="https://www.youtube.com/embed/boqEA4zTrL4"
                frameBorder={"0"}
                allow={
                    "accelerometer; autoplay; clipboard-write, encrypted-media, gyroscope, picture-in-picture"}
                allowFullScreen
                />
            </div>
        </Container>
    );
}