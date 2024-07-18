CREATE TABLE `verdura` (
  `cod_verdura` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_verdura` varchar(20) NOT NULL,
  `categoria_verdura` varchar(25) NOT NULL,
  `preco_verdurakg` decimal(12,2) NOT NULL,
  PRIMARY KEY (`cod_verdura`)
