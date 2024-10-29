import { useParams } from "react-router-dom";
import { Container } from "../components/Container";

export const Default = () => {
  const { id } = useParams();
  return (
    <main>
      <Container>
        <span>Страница {id}</span>
      </Container>
    </main>
  );
};
