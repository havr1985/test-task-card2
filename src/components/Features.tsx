import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";



import card from "../../card.json";

const { features } = card



export const Features = () => {
  return (
    <>
      
      <Table>
        <TableBody className=" text-gray-500">
          <TableRow>
            <TableCell className="font-medium">Power consumption</TableCell>
            <TableCell>{features.power}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              Planetary motion of nozzies
            </TableCell>
            <TableCell>{features.motion}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Weight</TableCell>
            <TableCell>{features.weight}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Country</TableCell>
            <TableCell>{features.country}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Model</TableCell>
            <TableCell>{features.model}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Power cord lenght</TableCell>
            <TableCell>{features.cord}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Bowl volume</TableCell>
            <TableCell>{features.bowl}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <a href="#" className=" underline decoration-solid font-bold">
        ALL FEATURES
      </a>
    </>
  );
};
