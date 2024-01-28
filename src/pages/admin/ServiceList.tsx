import { getAllUsers } from "@/api/admin/users/users.api";
import useGetUsers from "@/api/admin/users/users.hook";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
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

const ServiceList = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  //console.log(await getAllUsers());

  const { data, isLoading, isError } = useGetUsers();

  if (isLoading) {
    return (
      <h2 className="flex justify-center items-center h-screen text-red-500 ">
        Loading...
      </h2>
    );
  }
  if (isError) {
    return <h2>Error fetching data</h2>;
  }

  //   <div>
  //   {data?.map((user) => (
  //     <div key={user.id} className="p-4 border">
  //       <h5>Person id:{user.id}</h5>
  //       <p>Name:{user.name}</p>
  //       <p>City:{user.address.city}</p>
  //     </div>
  //   ))}
  // </div>

  return (
    <Container className="mt-20 p-0 rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="">Phone</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>

              <TableCell className="text-right">
                <Button variant={"outline"}>Hello</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};

export default ServiceList;
