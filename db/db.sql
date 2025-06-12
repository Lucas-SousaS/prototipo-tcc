-- Tabela de Usuários (Pacientes)
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- ID único do paciente
    nome VARCHAR(255) NOT NULL,               -- Nome completo do paciente
    cpf VARCHAR(14) NOT NULL UNIQUE,          -- CPF do paciente (único)
    data_nascimento DATE NOT NULL,            -- Data de nascimento do paciente
    sexo VARCHAR(10) NOT NULL,                -- Sexo (ex: M ou F)
    email VARCHAR(255),                       -- E-mail do paciente
    telefone VARCHAR(20),                     -- Telefone de contato
    endereco TEXT,                            -- Endereço completo do paciente
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Data de criação do registro
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  -- Data de atualização
);

-- Tabela de Remédios
CREATE TABLE remedios (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- ID único do remédio
    nome VARCHAR(255) NOT NULL,               -- Nome do remédio
    descricao TEXT,                           -- Descrição do remédio
    tipo VARCHAR(100),                        -- Tipo do remédio (ex: comprimido, líquido, etc.)
    imagem_url VARCHAR(255),                  -- URL da imagem do remédio (se necessário)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Data de criação
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  -- Data de atualização
);

-- Tabela de Dosagens
CREATE TABLE dosagens (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- ID único da dosagem
    remedio_id INT,                           -- ID do remédio (relacionado à tabela `remedios`)
    dosagem VARCHAR(50),                      -- Quantidade do remédio (ex: 500mg)
    unidade VARCHAR(50),                      -- Unidade de medida (ex: mg, ml)
    frequencia VARCHAR(50),                   -- Frequência de administração (ex: 3x ao dia)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Data de criação
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Data de atualização
    FOREIGN KEY (remedio_id) REFERENCES remedios(id) -- Relacionamento com a tabela `remedios`
);

-- Tabela de Agendamentos
CREATE TABLE agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- ID único do agendamento
    remedio_id INT,                           -- ID do remédio (relacionado à tabela `remedios`)
    usuario_id INT,                           -- ID do usuário (relacionado à tabela `usuarios`)
    data DATETIME,                            -- Data e hora do agendamento
    ativo BOOLEAN DEFAULT TRUE,               -- Se o agendamento está ativo ou não
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Data de criação
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Data de atualização
    FOREIGN KEY (remedio_id) REFERENCES remedios(id), -- Relacionamento com a tabela `remedios`
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)  -- Relacionamento com a tabela `usuarios`
);

-- Tabela de Histórico de Administração
CREATE TABLE historico (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- ID único do histórico
    agendamento_id INT,                       -- ID do agendamento (relacionado à tabela `agendamentos`)
    tomado BOOLEAN,                           -- Se o remédio foi tomado (TRUE/FALSE)
    data DATETIME,                            -- Data e hora em que o remédio foi tomado
    observacoes TEXT,                         -- Observações adicionais (ex: "tomado com comida")
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Data de criação
    FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) -- Relacionamento com a tabela `agendamentos`
);
