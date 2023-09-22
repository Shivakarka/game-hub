import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
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
    <>
      <Heading as="h2" mb={5} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} py={"5px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant={"link"}
                colorScheme={
                  selectedGenre?.id === genre.id ? "blue" : undefined
                }
                fontWeight={selectedGenre?.id === genre.id ? "bold" : undefined}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
