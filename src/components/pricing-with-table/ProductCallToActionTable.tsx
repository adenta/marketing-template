import { Button, Stack, Table, TableProps, Tbody, Td, Tr } from '@chakra-ui/react'
import { Product } from './data'

interface ProductCallToActionTableProps extends TableProps {
  products: Product[]
}

export const ProductCallToActionTable = (props: ProductCallToActionTableProps) => {
  const { products, ...tableProps } = props
  return (
    <Table sx={{ tableLayout: 'fixed' }} {...tableProps}>
      <Tbody>
        <Tr>
          {products.length > 1 && <Td borderBottomWidth="0px" />}
          {products.map((_, id) => (
            <Td key={id} borderBottomWidth="0px">
              <Stack spacing="3">
                <Button variant="primary" width="full">
                  Buy now
                </Button>
                <Button variant="secondary" width="full">
                  Talk to sales
                </Button>
              </Stack>
            </Td>
          ))}
        </Tr>
      </Tbody>
    </Table>
  )
}
