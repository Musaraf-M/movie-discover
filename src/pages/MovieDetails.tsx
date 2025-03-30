import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import MovieDetailContent from "../components/MovieDetail";

const MovieDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { onClose } = useDisclosure({
    onClose: () => {
      setSearchParams("");
    },
  });
  return (
    <Modal
      onClose={onClose}
      isOpen={Boolean(searchParams.get("id"))}
      isCentered
      scrollBehavior="inside"
      size="2xl"
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Movie Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MovieDetailContent id={Number(searchParams.get("id"))} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MovieDetail;
