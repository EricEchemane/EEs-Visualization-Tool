import { Box } from '@material-ui/core';

export default function PathFindingVisualizer() {
    return (
        <Box
            p={4}
            className="flat searchVisualizerContainer "
            style={{
                width: '98vw', height: '80vh', position: 'relative',
                margin: 'auto', top: '1rem', overflow: 'hidden',
                borderRadius: '10px'
            }} >
            Path Finding
        </Box>
    )
}