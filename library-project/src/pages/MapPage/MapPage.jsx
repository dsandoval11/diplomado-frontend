import { Button, Grid } from '@mui/material';
import { Map } from '../../components/Map';
import { MainLayout } from '../../layouts/MainLayout';
import moment from 'moment';
import _ from 'lodash';
import { saveAs } from 'file-saver';

const now = moment().format('DD/MM/YYYY HH:mm:ss');
const date = new Date()

const number = [2, 4, 6, 8];
const sum = _.sum(number);

export const MapPage = () => {

  const onDownload = () => {
    const blob = new Blob(['hola mundo'], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(blob, 'hola.txt');
  }

  return (
    <MainLayout>
      <Grid item container lg={8} md={8}>
        {sum}
        {/* <p>{now}</p>  */}
        {/* <Map latLong={[3.429751, -76.540870]}/> */}
        
        <Button onClick={onDownload}>Descargar</Button>
      </Grid>
        {/* <p>{(date.getDate() +'/'+(date.getMonth()+1)+'/'+date.getFullYear())}</p> */}
    </MainLayout>
  )

}
