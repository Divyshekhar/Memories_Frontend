import {
  CardActions as MuiCardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import {
  Media,
  Overlay,
  Overlay2,
  Details,
  Title,
  Card as StyledCard,
} from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  // the id is stored in data base  by default as _id as that is the default value provided by the database
  return (
    <StyledCard>
      <Media image={post.selectedFile} title={post.title} />
      <Overlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </Overlay>
      <Overlay2>
        <Button style={{ color: 'white' }} size="small" onClick={() => { setCurrentId(post._id) }}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </Overlay2>
      <Details>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Details>
      <CardContent>
        <Title>
          <Typography variant="h5" gutterBottom>{post.title}</Typography>
        </Title>
        <Typography variant='body2' component="p" color="textSecondary">{post.message}</Typography>
      </CardContent>
      <MuiCardActions>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp; {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </MuiCardActions>
    </StyledCard>
  );
};

export default Post;
