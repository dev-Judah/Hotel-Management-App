import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (ASC)" },
          { value: "regularPrice-desc", label: "Sort by Price (DESC)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (ASC)" },
          { value: "maxCapacity-desc", label: "Sort by Capacity (DESC)" },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
