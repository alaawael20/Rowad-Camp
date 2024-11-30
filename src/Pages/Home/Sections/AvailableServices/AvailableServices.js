import React from "react";
import Title from "../../../../Components/Title/Title";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import { services } from "../../../../mock/services";

const AvailableServices = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Title title="الخدمات المتاحة" />
      <Container
        className="my-4"
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: 3,
                  borderRadius: 2,
                  margin: "auto",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Box display="flex" alignItems="center" marginBottom={2}>
                    {service.icon}
                    <Typography
                      variant="h6"
                      component="div"
                      style={{ marginLeft: 10, fontWeight: "bold" }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AvailableServices;
