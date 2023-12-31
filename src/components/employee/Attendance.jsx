import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { AttendanceDetail } from "./AttendanceDetail";

export const Attendance = () => {
  return (
    <>
      <TableContainer borderWidth={2}>
        <Table
          size={{ base: "sm", md: "md" }}
          variant="striped"
          colorScheme="blue"
        >
          <Thead>
            <Tr>
              <Th width="fit-content" color={"blue.500"}>
                No
              </Th>
              <Th width="40%" color={"blue.500"}>
                Clock In
              </Th>
              <Th width="40%" color={"blue.500"}>
                Clock Out
              </Th>
              <Th width="20%" color={"blue.500"}>
                Daily Salary
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <AttendanceDetail />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
