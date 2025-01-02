import PropTypes from 'prop-types';
import './Page.css';
import EditableField from './Editables';
import ContactInformation from './NameAndLinks';
import { educationData1, experienceData1, experienceData2 } from './data';

SectionHeader.propTypes = {
  sectionTitle: PropTypes.string,
}

SectionContainer.propTypes = {
  sectionData: PropTypes.arrayOf(PropTypes.array).isRequired,
  idPrefix: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

function SectionContainer({ sectionData, idPrefix, type }) {
  return (
    <div className={`section ${type}`}>
      {sectionData.map((item, index) => (
        <div key={`${idPrefix}-${index}`} className="sub">
          {item.map((field) => (
            <EditableField
              key={field.id}
              type={field.type}
              idPrefix={`${idPrefix}-${field.id}`}
              inputValue={field.value}
              styles={field.styles}
            >
              {field.icon}
            </EditableField>
          ))}
        </div>
      ))}
    </div>
  );
}

function SectionHeader({ sectionTitle }) {
  return (
    <div className="section-header">
      <h3>{sectionTitle}</h3>
      <div className='divider'></div>
    </div>
  );
}

function Page() {
  return (
    <div className="page">
      <ContactInformation />
      <SectionHeader sectionTitle="Education" />
      <SectionContainer
        sectionData={educationData1}
        idPrefix="education"
        type="education"
      />
      <SectionHeader sectionTitle="Experience" />
      <SectionContainer
        sectionData={experienceData1}
        idPrefix="experience"
        type="experience"
      />
      <SectionContainer
        sectionData={experienceData2}
        idPrefix="experience"
        type="experience"
      />
      <SectionHeader sectionTitle="Projects" />
      <SectionHeader sectionTitle="Technical Skills" />
    </div>
  );
}

export default Page;