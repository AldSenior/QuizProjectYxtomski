import { Button, Container, Navbar, Stack } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar
            expand="lg"
            style={{ backgroundColor: "RGB(50, 55, 35)" }}
            className="p-3"
        >
            <Container fluid>
                <Navbar.Brand
                    className="text-inter-custom"
                    style={{ color: "#EFE9D7" }}
                >
                    Namedly
                </Navbar.Brand>

                <Stack
                    direction="horizontal"
                    gap={3}
                    className="ms-auto align-items-center"
                >
                    <div style={{ color: "#EFE9D7" }}>Secondary</div>
                    <Button style={{ backgroundColor: "#7D2826", border: "none" }}>
                        Квизы
                    </Button>
                </Stack>
            </Container>
        </Navbar>
    );
}
