import * as React from 'react'
import { useGetAllAttractionsQuery } from "./services/attraction";
import { DataGrid,GridActionsCellItem } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AttractionsCardComponent from './components/AttractionsCardComponent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux'
import { setAttractionID } from './features/attraction/attractionSlice';

function App() {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetAllAttractionsQuery()
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'coverimage', headerName: 'image', width: 100,
      renderCell: (params)=> <Avatar src={params.value} variant="rounded"/> },
    { field: 'name', headerName: 'First name', width: 150 },
    { field: 'detail', headerName: 'Detail', width: 500 },
    { field: 'latitude', headerName: 'Latitude', width: 100 },
    { field: 'longitude', headerName: 'Longitude', width: 100 },
    { field: 'action', headerName: 'Action', width: 100 ,
      renderCell: (params)=>
      <GridActionsCellItem
        icon={<VisibilityIcon/>}
        onClick={()=>dispatch(setAttractionID(params.id))}
      />},
    
  
  ];
  
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        <Container maxWidth="lg">
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                
              />
          </div>
          <AttractionsCardComponent/>
         </Container>
          
        </>
      ) : null}
    </div>
  );
}

export default App;
