// Loading animation
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
       <Card style={{backgroundColor:'#f1f5f9'}} className=" p-2 shadow-sm" sx={{ minWidth: 275 }}>
      <CardContent>
       <Skeleton sx={{bgcolor:'white'}} animation="wave" variant="rounded" height={50}/>
       <br/>
       <Skeleton sx={{bgcolor:'white'}} animation="wave" variant="rounded" height={85}/>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
    </div>
  );
}



export function CardsSkeleton() {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
   
      </>
    );
  }