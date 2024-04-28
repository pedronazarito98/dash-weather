import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    Meal: "Café da manhã",
    Food: "Pão",
    Calories: 200,
    Carbs: 100,
    Proteins: 50,
    Fat: 20,
  },
  {
    Meal: "Café da manhã",
    Food: "Pão",
    Calories: 200,
    Carbs: 100,
    Proteins: 50,
    Fat: 20,
  },
  {
    Meal: "Café da manhã",
    Food: "Pão",
    Calories: 200,
    Carbs: 100,
    Proteins: 50,
    Fat: 20,
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]  text-gray-500">Meal</TableHead>
          <TableHead className="text-gray-500">Food</TableHead>
          <TableHead className="text-gray-500">Calories</TableHead>
          <TableHead className="text-gray-500">Carbs</TableHead>
          <TableHead className="text-gray-500">Proteins</TableHead>
          <TableHead className="text-gray-500">Fat</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.Meal}>
            <TableCell className="text-gray-200">{invoice.Meal}</TableCell>
            <TableCell className="text-gray-200">{invoice.Food}</TableCell>
            <TableCell className="text-gray-200">{invoice.Calories}</TableCell>
            <TableCell className="text-gray-200">{invoice.Carbs}</TableCell>
            <TableCell className="text-gray-200">{invoice.Proteins}</TableCell>
            <TableCell className="text-gray-200">{invoice.Fat}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
