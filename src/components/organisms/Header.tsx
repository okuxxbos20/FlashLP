import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/system'
import { useState } from 'react'

export const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  return (
    <>
      <Box>
        <CustomHeader elevation={0}>
          <CustomToolbar>
            <Box>Logo</Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Button
                color="secondary"
                variant="contained"
                disableElevation
                onClick={() => setIsDialogOpen(true)}
              >
                Login
              </Button>
              <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                <DialogTitle>this is dialog</DialogTitle>
              </Dialog>
            </Box>
          </CustomToolbar>
        </CustomHeader>
      </Box>
    </>
  )
}

const CustomHeader = styled(AppBar)({
  width: '100%',
  height: 56,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 20px'
})

const CustomToolbar = styled(Toolbar)({
  width: '100%',
  maxWidth: 1000
})
