// script-mapas.js - Lógica do mapa de calor do SINAIS

document.addEventListener("DOMContentLoaded", () => {
    const mapElement = document.getElementById("map");
    if (mapElement) {
      const map = L.map("map").setView([-14.2350, -51.9253], 4);
  
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(map);
  
      const heatData = [
        // Interior de SP
        [-23.386796, -47.560113, 0.98], [-23.237862, -47.507522, 0.49], [-23.093293, -47.167683, 0.8],
        [-23.105259, -47.547305, 0.36], [-23.383194, -47.532043, 0.97], [-23.561277, -47.303068, 0.59],
        [-23.438651, -47.537079, 0.87], [-23.080518, -46.866037, 0.75], [-23.462366, -47.239352, 0.3],
        [-23.351254, -47.437386, 0.93],
      
        // Região Serrana do RJ
        [-22.614149, -43.016417, 0.39], [-22.136229, -43.609592, 0.36], [-22.301199, -43.656284, 0.56],
        [-22.597156, -43.488167, 0.58], [-22.766008, -43.172663, 0.3], [-22.779071, -43.41815, 0.87],
        [-22.119839, -43.260504, 0.59], [-22.154842, -43.240641, 0.79], [-22.111712, -43.210859, 0.61],
        [-22.74498, -43.666574, 0.99],
      
        // Norte de MG
        [-17.58006, -44.905687, 0.63], [-17.43286, -44.524387, 0.84], [-17.330277, -44.164893, 0.76],
        [-17.143168, -44.361409, 0.81], [-17.819174, -44.220426, 0.65], [-17.109792, -44.766517, 0.36],
        [-17.781961, -44.48767, 0.36], [-17.285226, -44.297994, 0.67], [-17.161197, -44.237356, 0.84],
        [-17.36583, -44.887162, 0.65],
      
        // Entorno DF/GO
        [-16.567627, -48.558308, 0.86], [-16.693723, -48.195288, 0.97], [-16.365692, -48.643049, 0.91],
        [-16.089835, -48.672989, 0.45], [-16.158764, -48.299647, 0.6], [-16.698837, -48.351507, 0.91],
        [-16.418546, -48.112124, 0.76], [-16.263546, -48.591536, 0.76], [-16.556875, -48.168779, 0.77],
        [-16.161772, -48.477316, 0.62],
      
        // Interior do CE
        [-4.767859, -39.491961, 0.67], [-4.518324, -39.679559, 0.99], [-4.78628, -39.190698, 0.47],
        [-4.691872, -39.235861, 0.57], [-4.589937, -39.636593, 0.96], [-4.456273, -39.168655, 0.62],
        [-4.139819, -39.582328, 0.49], [-4.341646, -39.386293, 0.4], [-4.796593, -39.247179, 0.69],
        [-4.3449, -39.547644, 0.72],
      
        // Agreste PE
        [-8.285812, -35.868259, 0.68], [-8.581342, -36.319271, 0.42], [-8.333612, -35.825773, 0.42],
        [-8.50802, -35.729369, 0.75], [-8.68673, -36.192835, 0.84], [-8.30122, -35.608942, 0.97],
        [-8.64715, -35.651818, 0.91], [-8.592263, -36.258426, 0.83], [-8.329793, -35.682566, 0.87],
        [-8.684793, -35.842605, 0.86],
      
        // Região Sul RS
        [-31.276016, -52.435805, 0.94], [-31.792747, -52.699381, 0.69], [-31.478659, -52.591497, 0.45],
        [-31.20782, -52.529543, 0.47], [-31.711084, -52.710053, 0.66], [-31.641099, -52.050931, 0.84],
        [-31.448221, -52.648902, 0.46], [-31.154748, -52.612271, 0.69], [-31.56636, -52.482843, 0.71],
        [-31.716428, -52.080694, 0.9],
      
        // Interior da BA
        [-13.956209, -39.079237, 0.42], [-14.111308, -39.188884, 0.61], [-14.131546, -39.08769, 0.49],
        [-13.665595, -39.51939, 0.42], [-14.28721, -39.239758, 0.71], [-14.099436, -39.456153, 0.57],
        [-14.157681, -39.567357, 0.87], [-13.93278, -39.127605, 0.66], [-13.673891, -39.174777, 0.89],
        [-14.088134, -39.222791, 0.64]
      ];
      
  
      L.heatLayer(heatData, {
        radius: 45,
        blur: 2,
        maxZoom: 10,
        gradient: {
            0.2: 'blue',
            0.4: 'lime',
            0.6: 'orange',
            0.8: 'red'
          }
      }).addTo(map);
    }
  });
  