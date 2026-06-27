import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
function InfoBox({weatherInfo}){
  let ImgPath="https://th.bing.com/th/id/OIP.bbajzBJOEDRgYON1cA7oWwHaFj?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
 
   return <div className="Info_Box">
    <div className="MainBox">

              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={ImgPath}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {
                         weatherInfo.city
                       }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <h4>{`Temp is :${weatherInfo.temp}`}</h4>
                    <h4>{`MinTemp is:${weatherInfo.temp_min}`}</h4>
                    <h4>{`MaxTemp is:${weatherInfo.temp_max}`}</h4>
                    <h6>{`Feel_Likes is${weatherInfo.feels_like}`}</h6> 
    
                    </Typography>
                </CardContent>
      
    </Card>
          </div>
    </div>
}
export default InfoBox;