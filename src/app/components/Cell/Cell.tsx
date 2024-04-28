import * as stylex from "@stylexjs/stylex";

interface CellProps {
  children: React.ReactNode;
  size?: number;
  mediumSize?: number;
  largeSize?: number;
  xlargeSize?: number;
  columns?: number;
  columnsOnMedium?: number;
  columnsOnLarge?: number;
  columnsOnXlarge?: number;
  fit?: boolean;
  fitOnMedium?: boolean;
  fitOnLarge?: boolean;
  fitOnXlarge?: boolean;
  fullHeight?: boolean;
  fullHeightOnMedium?: boolean;
  fullHeightOnLarge?: boolean;
  fullHeightOnXlarge?: boolean;
  microSpacing?: boolean;
  smallSpacing?: boolean;
  largeSpacing?: boolean;
  noSpacing?: boolean;
  verticalSpacing?: boolean;
  microVerticalSpacing?: boolean;
  smallVerticalSpacing?: boolean;
  largeVerticalSpacing?: boolean;
  auto?: boolean;
  autoOnMedium?: boolean;
  autoOnLarge?: boolean;
  autoOnXlarge?: boolean;
  relative?: boolean;
  shrink?: boolean;
  shrinkOnMedium?: boolean;
  shrinkOnLarge?: boolean;
  shrinkOnXlarge?: boolean;
  grow?: boolean;
  growOnMedium?: boolean;
  growOnLarge?: boolean;
  growOnXlarge?: boolean;
  order?: number;
  maxWidth?: number;
  minWidth?: number;
  scroll?: boolean;
  customStyle?: React.CSSProperties; // Se você passar estilos customizados diretamente
}

const styles = stylex.create({
  cell: {
    paddingLeft: {
      default: 10,
      "@media (min-width: 768px)": 20,
      "@media (min-width: 992px)": 30,
      "@media (min-width: 1200px)": 40,
    },
    paddingRight: {
      default: 10,
      "@media (min-width: 768px)": 20,
      "@media (min-width: 992px)": 30,
      "@media (min-width: 1200px)": 40,
    },
    boxSizing: "border-box",
  },
  cell_fullHeight: {
    height: {
      default: "100%",
      "@media (min-width: 768px)": "100%",
      "@media (min-width: 992px)": "100%",
      "@media (min-width: 1200px)": "100%",
    },
  },
  cell_microSpacing: {
    paddingLeft: {
      default: 5,
      "@media (min-width: 768px)": 8,
      "@media (min-width: 992px)": 10,
      "@media (min-width: 1200px)": 12,
    },
    paddingRight: {
      default: 5,
      "@media (min-width: 768px)": 8,
      "@media (min-width: 992px)": 10,
      "@media (min-width: 1200px)": 12,
    },
  },
  cell_smallSpacing: {
    paddingLeft: {
      default: 8,
      "@media (min-width: 768px)": 10,
      "@media (min-width: 992px)": 12,
      "@media (min-width: 1200px)": 14,
    },
    paddingRight: {
      default: 8,
      "@media (min-width: 768px)": 10,
      "@media (min-width: 992px)": 12,
      "@media (min-width: 1200px)": 14,
    },
  },
  cell_largeSpacing: {
    paddingLeft: {
      default: 12,
      "@media (min-width: 768px)": 15,
      "@media (min-width: 992px)": 18,
      "@media (min-width: 1200px)": 20,
    },
    paddingRight: {
      default: 12,
      "@media (min-width: 768px)": 15,
      "@media (min-width: 992px)": 18,
      "@media (min-width: 1200px)": 20,
    },
  },
  cell_verticalSpacing: {
    paddingTop: {
      default: "10px",
      "@media (min-width: 768px)": "15px",
      "@media (min-width: 992px)": "20px",
      "@media (min-width: 1200px)": "25px",
    },
    paddingBottom: {
      default: "10px",
      "@media (min-width: 768px)": "15px",
      "@media (min-width: 992px)": "20px",
      "@media (min-width: 1200px)": "25px",
    },
  },
  cell_verticalSpacing_micro: {
    paddingTop: {
      default: "5px",
      "@media (min-width: 768px)": "7px",
      "@media (min-width: 992px)": "9px",
      "@media (min-width: 1200px)": "11px",
    },
    paddingBottom: {
      default: "5px",
      "@media (min-width: 768px)": "7px",
      "@media (min-width: 992px)": "9px",
      "@media (min-width: 1200px)": "11px",
    },
  },
  cell_verticalSpacing_small: {
    paddingTop: {
      default: "8px",
      "@media (min-width: 768px)": "10px",
      "@media (min-width: 992px)": "12px",
      "@media (min-width: 1200px)": "14px",
    },
    paddingBottom: {
      default: "8px",
      "@media (min-width: 768px)": "10px",
      "@media (min-width: 992px)": "12px",
      "@media (min-width: 1200px)": "14px",
    },
  },
  cell_verticalSpacing_large: {
    paddingTop: {
      default: "12px",
      "@media (min-width: 768px)": "15px",
      "@media (min-width: 992px)": "18px",
      "@media (min-width: 1200px)": "20px",
    },
    paddingBottom: {
      default: "12px",
      "@media (min-width: 768px)": "15px",
      "@media (min-width: 992px)": "18px",
      "@media (min-width: 1200px)": "20px",
    },
  },
  cell_noSpacing: {
    padding: 0,
    // Não é necessário repetir para cada breakpoint se os valores são iguais
  },
  cell_auto: {
    flex: {
      default: "1 1 0",
      "@media (min-width: 768px)": "1 1 0", // Assumindo medium como 768px
      "@media (min-width: 992px)": "1 1 0", // Assumindo large como 992px
      "@media (min-width: 1200px)": "1 1 0", // Assumindo xlarge como 1200px
    },
    width: "auto",
  },
  cell_shrink: {
    flex: {
      default: "0 0 auto",
      "@media (min-width: 768px)": "0 0 auto", // Para medium e acima
      "@media (min-width: 992px)": "0 0 auto", // Para large
      "@media (min-width: 1200px)": "0 0 auto", // Para xlarge
    },
    width: "auto",
  },
  cell_fit: {
    flex: {
      default: "0 1 auto",
      "@media (min-width: 768px)": "0 1 auto", // Para medium e acima
      "@media (min-width: 992px)": "0 1 auto", // Para large
      "@media (min-width: 1200px)": "0 1 auto", // Para xlarge
    },
    width: "auto",
  },
  cell_grow: {
    flex: {
      default: "1 0 auto",
      "@media (min-width: 768px)": "1 0 auto", // Para medium e acima
      "@media (min-width: 992px)": "1 0 auto", // Para large
      "@media (min-width: 1200px)": "1 0 auto", // Para xlarge
    },
    width: "auto",
  },
  cell_scroll: {
    overflow: "auto",
  },
  relative: {
    position: "relative",
  },
  // Adicione outros estilos conforme necessário
});

// A função de criação de estilos dinâmicos pode ser adaptada similarmente
const generateWidthStyles = (columns: number) => {
  let dynamicStyles = {};
  for (let size = 1; size <= columns; size++) {
    dynamicStyles[`cell_${size}`] = {
      width: {
        default: `${(size / columns) * 100}%`, // Default width
        "@media (min-width: 768px)": `${(size / columns) * 100}%`, // Adjusted for medium breakpoint
      },
    };
  }
  return dynamicStyles;
};

const dynamicWidthStyles = generateWidthStyles(1);

const allStyles = { ...styles, ...dynamicWidthStyles };

export const Cell = ({
  children,
  size,
  mediumSize,
  largeSize,
  xlargeSize,
  columns,
  columnsOnMedium,
  columnsOnLarge,
  columnsOnXlarge,
  fit,
  fitOnMedium,
  fitOnLarge,
  fitOnXlarge,
  fullHeight,
  fullHeightOnMedium,
  fullHeightOnLarge,
  fullHeightOnXlarge,
  microSpacing,
  smallSpacing,
  largeSpacing,
  noSpacing,
  verticalSpacing,
  microVerticalSpacing,
  smallVerticalSpacing,
  largeVerticalSpacing,
  auto,
  autoOnMedium,
  autoOnLarge,
  autoOnXlarge,
  relative,
  shrink,
  shrinkOnMedium,
  shrinkOnLarge,
  shrinkOnXlarge,
  grow,
  growOnMedium,
  growOnLarge,
  growOnXlarge,
  order,
  maxWidth,
  minWidth,
  scroll,
  customStyle,
}: CellProps) => {
  // Construa a lista de estilos a aplicar com base nas propriedades
  const dynamicStyles = [
    styles.cell,

    auto && styles.cell_auto,

    fullHeight && styles.cell_fullHeight,

    relative && styles.relative,
    shrink && styles.cell_shrink,

    grow && styles.cell_grow,

    fit && styles.cell_fit,

    microSpacing && styles.cell_microSpacing,
    smallSpacing && styles.cell_smallSpacing,
    largeSpacing && styles.cell_largeSpacing,
    verticalSpacing && styles.cell_verticalSpacing,
    microVerticalSpacing && styles.cell_verticalSpacing_micro,
    smallVerticalSpacing && styles.cell_verticalSpacing_small,
    largeVerticalSpacing && styles.cell_verticalSpacing_large,
    noSpacing && styles.cell_noSpacing,
    scroll && styles.cell_scroll,
    customStyle,
  ].filter(Boolean);

  return (
    <div
      {...stylex.props(...dynamicStyles, size && size)}
      style={{
        order,
        maxWidth: maxWidth && maxWidth * 16,
        minWidth: minWidth && minWidth * 16,
        background: "red",
      }}
    >
      {children}
    </div>
  );
};
