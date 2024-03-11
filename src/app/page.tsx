import { Container, Circle } from '@/app/index';

export default function Home() {
    return (
        <>
            <Container>
                <Circle radius="100px" color="#fff" backgroundColor="#1d8a78" text="message" />
                <Circle radius="100px" color="#fff" backgroundColor="#1d498a" text="message" />
                <Circle radius="100px" color="#fff" backgroundColor="#8a851d" text="message" />
            </Container>
        </>
    );
}
