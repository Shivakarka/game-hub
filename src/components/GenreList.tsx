import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  const { selectedGenreId, onSelectGenre } = useGameQueryStore((state) => ({
    selectedGenreId: state.gameQuery.genreId,
    onSelectGenre: state.setGenreId,
  }));

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
                onClick={() => onSelectGenre(genre.id)}
                fontSize="lg"
                variant={"link"}
                colorScheme={selectedGenreId === genre.id ? "blue" : undefined}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
