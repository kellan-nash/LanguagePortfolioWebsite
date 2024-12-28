

document.getElementById('create').addEventListener('click', createArtifact)

function createArtifact() {

    event.preventDefault();
    
    var artifactList = document.getElementById('artifactList')

    var reading = document.getElementById('reading').checked ? 'Reading' : '';
    var writing = document.getElementById('writing').checked ? 'Writing' : '';
    var speaking = document.getElementById('speaking').checked ? 'Speaking' : '';
    var listening = document.getElementById('listening').checked ? 'Listening' : '';
    var reflection = document.getElementById('reflection').value;

    var artifact = document.createElement('div');
    artifact.classList.add('artifact');

    artifact.innerHTML = `
        <fieldset>
            <p>Artifact Types: ${[reading, writing, speaking, listening].filter(Boolean).join(', ')}</p>
            <p>Reflection: ${reflection}</p>
        </fieldset>
    `;

    artifactList.appendChild(artifact);

    document.getElementById('artifactForm').reset();
}

