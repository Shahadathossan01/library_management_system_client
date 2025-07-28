import { Box } from "@mui/material";
import TextField from "../../../components/ui/TextField";


const Summary = ({book}) => {
    return (
        <Box sx={{mt:3}}>
            <TextField variant="h6">Summary</TextField>
            <TextField variant="body1">{book?.summary} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nostrum consectetur ratione itaque officiis ab doloremque aliquam consequatur, assumenda ipsam sint nulla esse temporibus tempora! Ratione eaque fugiat quae minus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facere, iusto laudantium commodi sequi ipsam nihil quo, minima tempora nesciunt ea ipsum aliquam natus nobis veritatis hic, perspiciatis officiis debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus ipsam dolorum cumque, at eos praesentium fuga ad maxime placeat quas deleniti amet culpa aliquid! Exercitationem non rem et mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur, voluptate doloribus perferendis deserunt earum asperiores eum odio quam, tempore aliquid cupiditate suscipit, itaque explicabo enim nisi consectetur voluptates ducimus.</TextField>
        </Box>   
    )
};

export default Summary;