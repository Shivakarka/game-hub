import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <Spinner size={"xl"} />;
  }

  if (error) {
    return null;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} py={"5px"}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant={"link"}
              colorScheme={selectedGenre?.id === genre.id ? "blue" : undefined}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : undefined}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
