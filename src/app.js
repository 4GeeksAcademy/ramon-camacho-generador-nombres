let brand = ["wenrei", "ramoncamacho"];
let rol = ["a11y", "studio", "lab", "design", "UX", "UI"];
let extensions = ["com", "net", "us", "io", "es"]



for (let i = 0; i < brand.length; i++) {
  for (let j = 0; j < rol.length; j++) {
    let fullName = brand[i] + rol[j];

      for (let e = 0; e < extensions.length; e++) {
        let ext = extensions[e];

        if (fullName.endsWith(ext)){
          let hackName = fullName.slice (0, -ext.length);
          console.log(`${hackName}.${ext} <-- domain hacks`);
        }

        else{
          console.log(`${fullName}.${ext}`);
        }
      }
    }
  }