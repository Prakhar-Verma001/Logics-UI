import React from 'react';
import { Paper, Typography, Stack, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <>
        <Paper
          component="footer"
          elevation={3}
          square
          sx={{ mt: 'auto', py: 2, px: 2, bgcolor: 'grey.100' }}
        >
          <Divider sx={{ mb: 2 }} />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems="center" marginInline={'2rem'}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Created By <Typography component="span" color={'#1D24CA'} sx={{ fontWeight: 600 }}>Prakhar Verma</Typography>.
            </Typography>

            <Stack direction="row" spacing={6}>
              <Link href="#" underline="hover" color="inherit">
                Privacy Policy
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Terms
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Contact
              </Link>
            </Stack>
          </Stack>
        </Paper>
    </>
    
  );
}

export { Footer }