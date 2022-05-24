import React from "react"
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



function OrderList(props) {

    const { recipeName, recipeSchema, date, status, orderId } = props;
    console.log(recipeSchema.s3URL);

    return(
<ListItem alignItems="center">
                                        <ListItemAvatar>
                                            <Avatar alt="Order Image" src={recipeSchema[0].s3URL} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={recipeName}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                       {status}
                                                    </Typography>
                                                    {" — I'll be in your neighborhood doing errands this…"}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                   
    )
}

export default OrderList;