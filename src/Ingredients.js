function Ingredients({ingredientsList}) {
  return (
    <ul>
      {
        ingredientsList.map((ingredient,index) => (
          <li key={index}>{ingredient}</li>
        ))
      }
    </ul>
  );
}

export default Ingredients;