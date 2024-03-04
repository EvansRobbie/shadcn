import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

export async function getRecipes(): Promise<Recipe[]> {
  const recipes = await fetch("http://localhost:4000/recipes").then((res) =>
    res.json()
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return recipes;
}
export default async function Home() {
  const recipes = await getRecipes();
  // console.log(recipes);
  return (
    <main className="">
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src={`localhost:4000/recipes/${recipe.image}`}
                  alt="image"
                />
                <AvatarFallback className="uppercase">
                  {recipe.title.slice(0, 2)}
                </AvatarFallback>
              </Avatar>

              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className=" justify-between items-center">
              <Button>View Recipe</Button>

              {recipe.vegan && <Badge variant="secondary">!vegan</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
